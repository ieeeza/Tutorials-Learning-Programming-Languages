var greetings: String? = null

fun main() {
    when (greetings) {
        null -> println("hi")
        else -> println(greetings)
    }
}