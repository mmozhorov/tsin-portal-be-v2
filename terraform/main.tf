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

  tags = {
    Name = "Web App Server"
    Owner = "mmozhorov"
    Project = "TSIN-PORTAL-BE-V2"
  }

  lifecycle {
    prevent_destroy = true
  }
}