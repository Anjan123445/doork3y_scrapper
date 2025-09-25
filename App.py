from flask import Flask, jsonify, make_response
import requests
import urllib.parse
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

NEWSAPI_KEY = "d6f3a5f34e87456295e42f7c59a5e1be"


current_page = 1
MAX_PAGE = 5 

def fetch_news_from_api(topic, page=1):
    """
    Fetches a specific 'page' of startup news articles.
    """
    api_url = (
        f"https://newsapi.org/v2/everything?"
        f"q={urllib.parse.quote_plus(topic)}"
        f"&sortBy=publishedAt"
        f"&language=en"
        f"&pageSize=8"
        f"&page={page}"
        f"&apiKey={NEWSAPI_KEY}"
    )

    headers = {
        'X-No-Cache': 'true',
        'User-Agent': (
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
            'AppleWebKit/537.36 (KHTML, like Gecko) '
            'Chrome/91.0.4472.124 Safari/537.36'
        )
    }

    try:
        response = requests.get(api_url, headers=headers)
        response.raise_for_status()
        data = response.json()

        print(f"Raw API Response (page={page}):", data)

        if data['status'] != 'ok':
            print(f"NewsAPI error: {data.get('message', 'Unknown error')}")
            return []

        articles_data = []
        for article in data.get('articles', []):
            if article['title'] and article['url']:
                img_url = article.get('urlToImage')
                if not img_url or not isinstance(img_url, str) or img_url.strip() == '':
                    img_url = 'https://placehold.co/600x400/0033ad/FFFFFF?text=No+Image'
                articles_data.append({
                    "id": article['url'],
                    "img": img_url,
                    "url": article['url'],
                    "headline": article['title'],
                    "height": 300
                })

        return articles_data

    except requests.exceptions.RequestException as e:
        print(f"Error fetching data from NewsAPI: {e}")
        return []

@app.route("/api/news")
def api_news():
    global current_page, MAX_PAGE

    topic = 'startup'

    
    news = fetch_news_from_api(topic, page=current_page)
    current_page += 1
    if current_page > MAX_PAGE:
        current_page = 1

    response = make_response(jsonify(news))

    
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response

if __name__ == "__main__":
    app.run(debug=True, port=5000)
