# API Security Testing

## Enumeration
- API endpoints
  - from js files
  - brute force
- For a single endpoint
  - Check which header it accepts
  - Authorization token, cookies required or not
- Info gathering by causing errors
  - Supplying different type of parameter
  - Malformed data (JSON, XML)
  - Trying all methods
  - Basically sending data it isn't expecting
- Check HTML source for more info
- Identify tech stack 
    - There can be pitfalls for a tech used
 
## Techanical bugs (TODO)
- [sqli](/blog/sqli)
- [xss](/blog/xss)
- [ssti](/blog/ssti)
- [rce](/blog/rce)
- [jwt](/blog/jwt)

## Logical bugs
- [idors](/blog/idor)


## Resources
### Github
- [31 days of API Security Tips](https://github.com/smodnix/31-days-of-API-Security-Tips)

### Youtube
- [API Security 101 by Sadako](https://www.youtube.com/watch?v=ijalD2NkRFg)
- [Bad API, hAPI Hackers! by jr0ch17](https://www.youtube.com/watch?v=UT7-ZVawdzA)
- [Hidden in Plain Site: Disclosing Information via Your APIs - Peter Yaworski, Bugcrowd's LevelUp 2017](https://www.youtube.com/watch?v=jBi3a-dXsM8)

## Labs
- [payatu/Tiredful-API](https://github.com/payatu/Tiredful-API/)

