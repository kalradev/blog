# IDOR - Insecure Direct Object References
## What?
IDOR - Insecure Direct Object References, as the name suggests IDOR is a vulnerability in which non authorized users can directly access objects, objects is nothing but data, simply due to authorization not implemented properly. There is no such framework that can mitigate this vulnerability easily like in the case of xss or sql. That's why developer has to implement it themselves and because of which it is more error prone.

## Examples for Possible Attacks
- Changing Id when getting some data
- Changing Id when changing some data - maybe blind idor
- There id can be used in link, request body, cookies.
- HTTP Parameter Pollution
- Sometimes you can chain attack using idor - blind idor+xss
- Getting files associated with other users
- Sometimes ID used is a uuid - not guessable. Then somehow make the app to leak ids. 

## Automating the Attack
- Detect those urls which are using of some kind of ids  in params or parameters
- change those ids and check what the response code is

## Resources
### Blogs
- [Portswigger - web academy](https://portswigger.net/web-security/access-control/idor)
- [How to find more IDORs](https://medium.com/@vickieli/how-to-find-more-idors-ae2db67c9489)
### Youtube
- [Insecure Direct Object Reference Vulnerability](https://www.youtube.com/watch?v=rloqMGcPMkI)
- [Burp Suite tutorial: IDOR vulnerability automation using Autorize and AutoRepeater (bug bounty)](https://www.youtube.com/watch?v=3K1-a7dnA60)