#!/usr/bin/env python3
import rclpy
from rclpy.node import Node
from example_interfaces.msg import Int64

class NumberCounter(Node):
    def __init__(self):
        super().__init__("number_counter")
        self.subscriber_ = self.create_subscription(Int64, "number", self.callback_counter, 10)
        self.get_logger().info("number_counter has been started.")

        self.counter_ = 38
        self.publisher_ = self.create_publisher(Int64, "number_count", 10)
        self.timer_ = self.create_timer(0.5, self.publish_number)

    def callback_counter(self, msg: Int64):
        self.get_logger().info(str(msg.data))
        self.data_ = msg.data

    def publish_number(self):
        msg = Int64()
        self.counter_ += self.data_ # int data
        msg.data = self.counter_
        self.publisher_.publish(msg)

def main(args=None):
    rclpy.init(args=args)
    node = NumberCounter()
    rclpy.spin(node)
    rclpy.shutdown()


if __name__ == "__main__":
    main()