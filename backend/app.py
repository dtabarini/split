from flask import Flask
 
app = Flask(__name__)
 
@app.route('/hello')
def hello():
    return 'Hello World'

@app.route('/')
def hello():
    return 'Hello World'

@app.route('/query/')
def queryBuild():   

    item = {
    'name': "abc",
    'price': 12,
    'quantity': 1,
    'isClaimed': False
    }
    items = [item, item, item]

    example  = {
    'Id': "string",
    'Items': items,
    'ClaimedItems': items,
    'Tax': 8.23,
    'Tip': 3,
    'PaymentProviderName': "string",
    'PaymentInformation': "string", 
}
    itemList = [item, item, item]

    return example
 
app.run(host='localhost', port=5000)
