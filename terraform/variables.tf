variable "region" {
  description = "Region to deploy app"
  default = "us-east-1"
}

variable "instance_type" {
  description = "Instance type for deploy app"
  default = "t3.micro"
}

variable "allow_ports" {
  description = "Accessible ports for connect to app"
  default = [ "80", "443" ]
}

variable "enable_detailed_monitoring" {
  description = "Enable detailed monitoring for server"
  type = bool
  default = false
}