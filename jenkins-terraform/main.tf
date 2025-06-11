provider "aws" {
  region = "ap-south-1"
  
}
data "aws_vpc" "default" {
  default = true
}
resource "aws_security_group" "web_sg" {
  name        = "web_sg"
  description = "Allow HTTP and SSH traffic"

  dynamic "ingress" {
    for_each =  [80, 22, 443, 8080, 9000, 3000]
    content {
      from_port   = ingress.value
      to_port     = ingress.value
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"] # Allow SSH from anywhere (not recommended for production)
      ipv6_cidr_blocks = []
      prefix_list_ids = []
      security_groups = []
      self = false
    }
}

    egress {
        from_port   = 0
        to_port     = 0
        protocol    = "-1" # Allow all outbound traffic
        cidr_blocks = ["0.0.0.0/0"]
    }
}

resource "aws_instance" "webpage" {
  ami             = "ami-02521d90e7410d9f0" # Example AMI, replace with a valid one for your region
  instance_type   = "t2.large" # Change to your desired instance type
  security_groups = [aws_security_group.web_sg.name]
  key_name        = "windows" # Replace with your key pair name
  user_data       = templatefile("./install.sh", {})
  root_block_device {
    volume_size = 30
    volume_type = "gp2"
  }

  tags = {
    Name = "jenkins-ci-cd"
  }
}


