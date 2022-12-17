package main

import (
	"fmt"

	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()
	r.GET("/", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"msg": "ok",
		})
	})
	fmt.Print("运行")
	r.Run("0.0.0.0:8080")
}
