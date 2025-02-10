var greetings: String? = null

fun main() {
    var greetingToPrint = if(greetings != null) greetings else "hi"
    println(greetingToPrint)
    println("Cesar")
}