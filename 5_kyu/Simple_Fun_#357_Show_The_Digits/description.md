# [Simple Fun #357: Show The Digits](https://www.codewars.com/kata/59cc4c5aaeb284b9a1000089)

## Description:

You are given a string digits and an integer size(1-9). Your task is to generate a result like this:

```
show("888",1) ===
 -  -  -
| || || |
 -  -  -
| || || |
 -  -  -

show("888",2) ===
 --  --  --
|  ||  ||  |
|  ||  ||  |
 --  --  --
|  ||  ||  |
|  ||  ||  |
 --  --  --

show("1234567890",3) ===
      ---  ---       ---  ---  ---  ---  ---  ---
    |    |    ||   ||    |        ||   ||   ||   |
    |    |    ||   ||    |        ||   ||   ||   |
    |    |    ||   ||    |        ||   ||   ||   |
      ---  ---  ---  ---  ---       ---  ---
    ||        |    |    ||   |    ||   |    ||   |
    ||        |    |    ||   |    ||   |    ||   |
    ||        |    |    ||   |    ||   |    ||   |
      ---  ---       ---  ---       ---  ---  ---
```

As you can see:

- Use '-' represents the horizontal line; Use '|' represents the vertical line.
- `size` determines the length of the horizontal line and the height of the vertical line. i.e. If size is 1, the horizontal line is -; If size is 2, the horizontal line is --. and so on..
- Each row is separated by `"\n"`.
- To keep shapes, other places are filled with spaces. Except for the end of each line.
- Happy Coding `^\_^`
