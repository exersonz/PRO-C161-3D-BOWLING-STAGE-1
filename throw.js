AFRAME.registerComponent("bowling-balls", {
    init: function(){
        this.throwBall();
    },
    throwBall: function(){
        window.addEventListener("keydown", (e) => {
            if(e.key === "z"){
                var ball = document.createElement("a-entity");

                ball.setAttribute("geometry", {
                    primitive: "sphere",
                    radius: 0.1
                });

                ball.setAttribute("material", "color", "black");

                var cam = document.querySelector("#camera");
                
                pos = cam.getAttribute("position");

                ball.setAttribute("position", {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                });

                //fetching the camera element as an object of Three.js
                var camera = document.querySelector("#camera").object3D;

                //getting the camera direction as Three.js vector
                var direction = new THREE.Vector3();
                camera.getWorldDirection(direction);

                //setting the velocity and it's direction
                ball.setAttribute("velocity", direction.multiplyScalar(-2.5));

                var scene = document.querySelector("#scene");
                scene.appendChild(ball);
            }
        });
    }
});