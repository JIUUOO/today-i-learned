#include "rclcpp/rclcpp.hpp"

class MyNode : public rclcpp::Node { // inherit from rclcpp:Node
    public:
        MyNode() : Node("cpp_test"), counter_(0) // parent's constructor
        {
            RCLCPP_INFO(this->get_logger(), "Hello world");
            timer_ = this->create_wall_timer(std::chrono::seconds(1), // `this` refers to node class
                                             std::bind(&MyNode::timerCallback, this)); // just refering to method
        }
    private:
        void timerCallback() {
            RCLCPP_INFO(this->get_logger(), "Hello %d", counter_);
            counter_++;
        }
        rclcpp::TimerBase::SharedPtr timer_;
        int counter_;

};

int main(int argc, char**argv) {
    rclcpp::init(argc, argv);
    auto node = std::make_shared<MyNode>(); // shared pointer
    rclcpp::spin(node);
    rclcpp::shutdown();
    return 0;
}