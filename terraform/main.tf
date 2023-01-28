provider "aws" {
  access_key = ""
  secret_key = ""
  region = var.region
}

data "aws_ami" "amazon_linux" {
  most_recent = true
  filter {
    name   = "name"
    values = ["amzn2-ami-kernel-*-x86_64-gp2"]
  }
  owners = ["amazon"]
}

resource "aws_eip" "web-app-static-ip" {
  instance = aws_instance.web-app.id
}

resource "aws_instance" "web-app" {
#  count = 1
  ami = data.aws_ami.amazon_linux.id
  instance_type = var.instance_type
  vpc_security_group_ids = [ aws_security_group.web-app-sg.id ]
  monitoring = var.enable_detailed_monitoring

  tags = {
    Name = "Web App Server"
    Owner = "mmozhorov"
    Project = "TSIN-PORTAL-BE-V2"
  }

  lifecycle {
#    prevent_destroy = true
    create_before_destroy = true
  }

#  depends_on = [ aws_security_group.web-app-sg ]
}

resource "aws_security_group" "web-app-sg" {
  name = "Web App Security Group"
  dynamic "ingress" {
    for_each = var.allow_ports
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