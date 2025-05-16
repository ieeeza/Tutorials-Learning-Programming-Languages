import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel
from PyQt5.QtGui import QIcon, QFont
from PyQt5.QtCore import Qt


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Meu primeiro programa!")
        self.setGeometry(0, 0, 500, 500)
        self.setWindowIcon(
            QIcon("PyQt-Tutorial-BroCode\GUI Windows\pic.jpg"))  # type: ignore

        label = QLabel("Hello", self)
        label.setFont(QFont("Arial", 40))
        label.setGeometry(0, 0, 500, 100)
        label.setStyleSheet("color: #292929;"
                            "background-color: #6fdcf7;"
                            "font-weight: bold;"
                            "font-style: italic;"
                            "text-decoration: underline;")

        #label.setAlignment(Qt.AlignTop) #vertical top
        #label.setAlignment(Qt.AlignBottom)  # vertical bottom
        #label.setAlignment(Qt.AlignVCenter)  # vertical center
        
        #label.setAlignment(Qt.AlignRight)  # Horizontal Right
        #label.setAlignment(Qt.AlignHCenter)  # Horizontal Center
        #label.setAlignment(Qt.AlignLeft)  # Horizontal Left

        label.setAlignment(Qt.AlignHCenter | Qt.AlignTop) # type: ignore

def main():
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec_())


if __name__ == "__main__":
    main()
