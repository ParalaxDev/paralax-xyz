# insert image links in a input

import re

inp = input('Press Q to quit, or enter a pinterst image url \n> ')
imageList = []

while inp != 'q':

    
    
    inp = input('Press Q to quit, or enter a pinterst image url \n> ')
    inp = re.sub('/474x/gm', 'original', inp)
    imageList.append(inp)


print(imageList)
