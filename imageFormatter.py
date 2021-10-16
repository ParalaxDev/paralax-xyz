# insert image links in a input

import re

type = input('links to json [L] or imgbb bulk links to json [B]\n> ')

if type == 'L':

    inp = input('Press Q to quit, or enter a pinterst image url \n> ')
    imageList = []

    while inp != 'q':

        
        
        inp = input('Press Q to quit, or enter a pinterst image url \n> ')
        # inp = re.sub('/474x/gm', 'original', inp)
        imageList.append(inp)


    print(imageList)

elif type == 'B':
    inp = input('Enter you\'re bulk image link \n> ')
    imageList = []

    while True:
        try:
            line = input()
        except EOFError:
            break
        imageList.append(line)
        

    

    # imageList = imageList.split()

    print(imageList)
