// return someting 
// fun getGretting() = "Hello World"
fun getGretting(): String {
    return "Hello World"
}

// return nothing (): Unit
fun sayHello() {
    println(getGretting())
} 

fun sayHello2(itemToGreet:String) {
    println("Hello $itemToGreet")
}

fun main() {
    sayHello2("World")
}