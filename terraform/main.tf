provider "aws" {
  access_key = ""
  secret_key = ""
  region = "us-east-1"
}

resource "aws_eip" "web-app-static-ip" {
  instance = aws_instance.web-app.id
}

resource "aws_instance" "web-app" {
  count = 1
  ami = "ami-00874d747dde814fa"
  instance_type = "t3.micro"
  vpc_security_group_ids = [ aws_security_group.web-app-sg.id ]

  tags = {
    Name = "Web App Server"
    Owner = "mmozhorov"
    Project = "TSIN-PORTAL-BE-V2"
  }

  lifecycle {
#    prevent_destroy = true
    create_before_destroy = true
  }
}

resource "aws_security_group" "web-app-sg" {
  name = "Web App Security Group"
  dynamic "ingress" {
    for_each = [ "80", "443" ]
    content {
      from_port = ingress.value
      to_port = ingress.value
      protocol = "tcp"
      cidr_blocks = [ "0.0.0.0/0" ]
    }
  }

  egress {
    from_port = 0
    protocol  = "-1"
    to_port   = 0
    cidr_blocks = [ "0.0.0.0/0" ]
  }

  tags = {
    Name = "WebApp"
    Owner = "mmozhorov"
  }
}