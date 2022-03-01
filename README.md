# Pieces of Art. Kruglaya Anastasia 953505
###### Board Game for everyone
## 
## Description

_Pieces_ _of_ _Art_ - it's a simple board game based on allknown game: 15 puzzle. 
> __15 puzzle__ is a sliding puzzle having 15 square tiles numbered 1–15 in a frame that is 4 tiles high and 4 tiles wide, leaving one unoccupied tile position. Tiles in the same row or column of the open position can be moved by sliding them horizontally or vertically, respectively. The goal of the puzzle is to place the tiles in numerical order. Named for the number of tiles in the frame, the 15 puzzle may also be called a 16 puzzle, alluding to its total tile capacity. Similar names are used for different sized variants of the 15 puzzle, such as the 8 puzzle that has 8 tiles in a 3×3 frame.

In my project I made this game more pleasent due to using famous paintings instead of numbers. 

## Links

#### [Home page](https://www.figma.com/file/5jAStgcm2EDigt49frYZyH/Piece-Of-Art?node-id=0%3A1)
#### [Sign In/ Registration](https://www.figma.com/file/5jAStgcm2EDigt49frYZyH/Piece-Of-Art?node-id=23%3A39)
#### [Game page/ Galery](https://www.figma.com/file/5jAStgcm2EDigt49frYZyH/Piece-Of-Art?node-id=38%3A98)

## 5 main functions of my project
##### 1. Top of users on on one picture;
##### 2. Stop/Play song on playing page;
##### 3. Dividing painting into blocks for the game according to users' choice(3x3, 4x4, 5x5);
##### 4. Counting the player's moves;
##### 5. Searching for painting by its' name in the galery.


## Data models description

1. User
    - Name
    - Email
    - Password
    - Profile picture
    - List of paintings with scores(that were made by this user)
    - List of favorite paintings
2. Painting
    - Name
    - Description
    - Top of players with scores
3. Game
    - Current painting
    - Score of the game
    - Size of the picture
    - Playing song
