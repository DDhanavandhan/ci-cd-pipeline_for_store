provider "aws" {
  region = "ap-south-1"
  
}
data "aws_vpc" "default" {
  default = true
}
resource "aws_security_group" "web_sg" {
  name        = "web_sg"
  description = "Allow HTTP and SSH traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Allow SSH from anywhere (not recommended for production)
  }
    ingress {
        from_port   = 80
        to_port     = 80
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"] # Allow HTTP from anywhere
    }
    ingress {
        from_port   = 5173
        to_port     = 5173
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"] # Allow HTTP from anywhere
    }
    egress {
        from_port   = 0
        to_port     = 0
        protocol    = "-1" # Allow all outbound traffic
        cidr_blocks = ["0.0.0.0/0"]
    }
}

resource "aws_instance" "webpage" {
  ami           = "ami-0f535a71b34f2d44a" # Example AMI, replace with a valid one for your region
  instance_type = "t2.micro"
  security_groups = [aws_security_group.web_sg.name]

  root_block_device {
    volume_size = 30
    volume_type = "gp2"
  }

  tags = {
    Name = "ExampleInstance"
  }
}


