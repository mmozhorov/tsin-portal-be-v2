terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "mmozhorov"

    workspaces {
      name = "tsin-portal-web-app"
    }
  }
}
