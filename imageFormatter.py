# insert image links in a input

import re
import os
from pathlib import Path


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

elif type == 'F':
    dirname = os.path.dirname(__file__)
    print(__file__)
    inp = input('Enter the relative path of the folder \n> ')
    filename = os.path.join(dirname, inp)
    imageList = []

    for path in Path(filename).iterdir():
        # print(f'{inp.split("public")[1].replace(os.sep, "/")}/{path.name}')
        imageList.append(f'{inp.split("public")[1].replace(os.sep, "/")}/{path.name}')

    # os.listdir(filename)
        
    print(imageList)
    

    # imageList = imageList.split()

