from gemini_test import *
from speech import *

while True:
    query = textToSpeech()
    print(query)
    filename = "stopsign.jpg"
    result = process_query(filename, query)
    print(result)
    speakText(result)
    input()