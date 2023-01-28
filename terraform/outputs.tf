data "aws_availability_zones" "working" {}
data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

output "web-app_instance_id" {
  value = aws_instance.web-app.public_ip
}

output "web-app_public_id_address" {
  value = aws_eip.web-app-static-ip.public_ip
}

output "data_aws_availability_zones" {
  value = data.aws_availability_zones.working.names
}

output "data_aws_caller_identity" {
  value = data.aws_caller_identity.current.account_id
}

output "data_aws_region" {
  value = data.aws_region.current.name
}

output "latest_ubuntu_ami_id" {
  value = data.aws_ami.amazon_linux.id
}

output "latest_ubuntu_ami_name" {
  value = data.aws_ami.amazon_linux.name
}