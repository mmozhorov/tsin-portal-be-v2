output "web-app-instance-id" {
  value = aws_instance.web-app.public_ip
}

output "web-app-public-id-address" {
  value = aws_eip.web-app-static-ip.public_ip
}