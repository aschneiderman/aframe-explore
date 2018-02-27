AFRAME.registerComponent('throwable', {
    schema: {
      force: {default: 80}
    },
    init: function () {
      this.user = this.el.sceneEl.querySelector('a-camera');
      this.el.addEventListener('mouseup', this.shoot.bind(this));
    },
    shoot: function () {
      var origin = (new THREE.Vector3()).copy(this.user.getAttribute('position'));
      console.log(origin);
      
      var force = this.el.body.position.vsub(origin);
      console.log(this.el.body, force);
      
      force.normalize();
      force.scale(this.data.force, force);
      this.el.body.applyImpulse(force, this.el.body.position);
    }
  });