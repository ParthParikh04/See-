from gemini_test import *
# from speech import *

while True:
    query =  "Give me just the text you can see on this slide" #
    print(query)
    filename = "slide.jpg"
    result = process_query(filename, query)
    print(result)
    # speakText(result)
    input()