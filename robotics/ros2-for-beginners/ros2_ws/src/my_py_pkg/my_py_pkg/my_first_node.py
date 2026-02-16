#!/usr/bin/env python3
import rclpy
from rclpy.node import Node

class MyNode(Node): # inheriting from Node

    def __init__(self):
        super().__init__("py_test")
        self.counter_ = 0 
        self.get_logger().info("Hello world") # super classes method
        self.create_timer(1.0, self.timer_callback) # just registering the function

    def timer_callback(self):
        self.get_logger().info("Hello" + str(self.counter_))
        self.counter_ += 1

def main(args=None):
    rclpy.init(args=args) # required for the first line    
    node = MyNode() # an instance of MyNode
    rclpy.spin(node) # need to provide the node we've just created
    rclpy.shutdown() # required for the last line

if __name__ == "__main__":
    main()