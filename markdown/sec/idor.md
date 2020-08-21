# IDOR - Insecure Direct Object References
![idor](/blogs/idor/idor.png)
## What?
IDOR - Insecure Direct Object References, as the name suggests IDOR is a vulnerability in which non authorized (NOTE: authorized not authenticated, there is a different between the two. ) users can directly access objects, objects is nothing but data, simply due to access control not implemented properly. 

## Why? 
We have seen framework that can mitigate XSS or SQL but there is no such framework for IDOR . The developers has to implement security control themselves and because of the human factor it is more error prone.

## How to attack
- For this attack the application must use id in some way to access data.
- After Identifying which and where the id is used we can attack the application.
- The id can be used in link like a parameter, request body, cookies.
- Changing Id when getting some data
- Changing Id when posting some data - maybe blind idor
- Try using different methods
- Try HTTP Parameter Pollution
- Sometimes ID used is a uuid - not guessable. What you can do is try to find some api or something in the app that can link these IDs. 
- After finding IDOR, you can try chaining attack for eg blind idor+xss

## Automating the Attack
- Doing all these manually will take a lot of time.
- Solution - automating
- Here is a great tutorial on how to do that.
- [Burp Suite tutorial: IDOR vulnerability automation using Autorize and AutoRepeater (bug bounty)](https://www.youtube.com/watch?v=3K1-a7dnA60)

## Resources
### Blogs
- [Portswigger - web academy](https://portswigger.net/web-security/access-control/idor)
- [How to find more IDORs](https://medium.com/@vickieli/how-to-find-more-idors-ae2db67c9489)
### Youtube
- [Insecure Direct Object Reference Vulnerability](https://www.youtube.com/watch?v=rloqMGcPMkI)
