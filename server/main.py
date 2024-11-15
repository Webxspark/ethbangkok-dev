from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from submit_content import handle_submit_content
# from analyze import handle_analyze
from verify_content import verify_content_handler


app = Flask(__name__)
CORS(app)

# New Report 
@app.route('/submit-content', methods=['POST'])
def submit_content():
    '''
    Params: proof_image = i, proof_text = t
     prompt:  i == public property
              i == problem == statement_equal(t)
              isMatching = true if score > 80
              response: isMatching: <bool>, matching: <str>, score: <int>/100
    '''
    return handle_submit_content(request)

@app.route('/verify-content', methods=['POST'])
def verify_content():
    """
    Handles the verification of submitted content.
    """
    return verify_content_handler(request)
    

app.run("0.0.0.0", port=8080, debug=True)