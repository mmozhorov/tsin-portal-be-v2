provider "aws" {
  access_key = ""
  secret_key = ""
  region = "us-east-1"
}

resource "aws_instance" "web-app" {
  ami = "ami-00874d747dde814fa"
  instance_type = "t3.micro"
}