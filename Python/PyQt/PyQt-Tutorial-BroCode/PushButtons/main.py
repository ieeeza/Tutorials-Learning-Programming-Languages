import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton, QLabel
from PyQt5.QtGui import QIcon


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Meu primeiro programa!")
        self.setGeometry(0, 0, 500, 500)
        self.button = QPushButton("Click me!", self)
        self.label = QLabel("Hello", self)
        self.setWindowIcon(
            QIcon("PyQt-Tutorial-BroCode\GUI Windows\pic.jpg"))  # type: ignore
        self.initUI()

    def initUI(self):
        self.button.setGeometry(0, 0, 100, 100)
        self.button.setStyleSheet("font-size: 20px;")
        self.button.clicked.connect(self.on_click)

        self.label.setGeometry(0, 100, 100, 100)
        self.label.setStyleSheet("font-size: 20px;")

    def on_click(self):
        self.label.setText("GoodBye")


def main():
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec_())


if __name__ == "__main__":
    main()
