#  HTTP Request Handling in Golang

In Go, HTTP requests are handled using ServeMux and Handlers. ServeMux is nothing but a router that will call the handlers based on the url prefix.
For that we have to register handlers with the mux.

## mux
```go
func main() {
    mux := http.NewServeMux()
    rootHandler:= &myFirstHandler{}
	mux.Handle("/", rootHandler)
	http.ListenAndServe(":3000", mux)
}
```
We are getting a new mux. 
Then we are registering a handler with the mux. 
Whenever a request with URL prefix "/" will come the mux will call rootHandler. 

## http.Handler
http.Handler is an interface and its definition is. 
```go
type Handler interface {
    ServeHTTP(ResponseWriter, *Request)
}
```
Let's write our first handler which will implement http.Handler interface
```go
type myFirstHandler struct {
}
func (h *myFirstHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("helloWorld"))
}
```
Now, we can use this handler to register with the mux.Handle and that's it. 
Now you can go and write your own web server.
But wait a minute the code is so verbose. Is there any better way?

## http.HandlerFunc
We can see that for this case the only thing we need is a function that will handle request and response. 
Lets do that the function we will be using
```go
func myFirstHandlerFunc(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("helloWorld"))
}
```
But in order to register with mux.Handle we have to pass something that implements the handler interface. 
For that we will use an inbuilt implemented type HandlerFunc. Here is what we will do
```go
// in the main function
rootHandler = http.HandlerFunc(myFirstHandlerFunc)
```
But what is going on here?
You may know that go has first class functions, which means that a function is treated as any other variables. 
Here we are just converting type of function to http.HandlerFunc. Do note that the function signature should be appropriate.
The type http.HandlerFunc implements the serveHTTP method which will do nothing but calls the given function. 
Problem solved !!

You know what I am not even happy with this, I am too lazy. The thing we just did is so prevalent in go code that there is another and most easy way to do this.

## mux.HandleFunc
mux Has another method with which you can register routes.
```go
// Instead of using
mux.Handle("/",rootHandler)
// we will use
mux.HandleFunc("/",myFirstHandlerFunc)
```

That is it, personally I think of http.HandlerFunc and mux.HandleFunc as syntactic sugar. 
At its core the things are working based on mux.Handle method and http.Handler interface.