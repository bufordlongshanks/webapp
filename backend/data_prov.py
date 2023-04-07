from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/price')
def get_data():
    url = "https://uk.finance.yahoo.com/quote/%5EFTSE?p=^FTSE"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    price_element = soup.find("fin-streamer", {"class": "Fw(b) Fz(36px) Mb(-4px) D(ib)"})
    price_value = price_element["value"]
    if price_value:
        data = {'price': price_value}
    else:
        data = {'price': 'no answer'}
        
    print(data)
    return jsonify(data)

if __name__ == '__main__':
    app.run()
