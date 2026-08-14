<script setup>
import { markCardDone } from '../../store/progress'
import TransformDemo from '../demos/TransformDemo.vue'
import GravityDemo from '../demos/GravityDemo.vue'
import CameraDemo from '../demos/CameraDemo.vue'
import CoordinateDemo from '../demos/CoordinateDemo.vue'
import LightDemo from '../demos/LightDemo.vue'
import UILayoutDemo from '../demos/UILayoutDemo.vue'
import MaterialDemo from '../demos/MaterialDemo.vue'
import CollisionDemo from '../demos/CollisionDemo.vue'
import ParticleDemo from '../demos/ParticleDemo.vue'
import NavMeshDemo from '../demos/NavMeshDemo.vue'
import NoiseDemo from '../demos/NoiseDemo.vue'
import RaycastDemo from '../demos/RaycastDemo.vue'
import DialogueDemo from '../demos/DialogueDemo.vue'
import FSMDemo from '../demos/FSMDemo.vue'
import JointDemo from '../demos/JointDemo.vue'
import ObjectPoolDemo from '../demos/ObjectPoolDemo.vue'
import VectorDotDemo from '../demos/VectorDotDemo.vue'
const props = defineProps({ card: Object, lessonId: String, cardIndex: Number })
const demos = { TransformDemo, GravityDemo, CameraDemo, CoordinateDemo, LightDemo, UILayoutDemo, MaterialDemo, CollisionDemo, ParticleDemo, NavMeshDemo, NoiseDemo, RaycastDemo, DialogueDemo, FSMDemo, JointDemo, ObjectPoolDemo, VectorDotDemo }
</script>
<template>
  <div>
    <h3>{{ card.title }}</h3>
    <p class="inst">{{ card.instructions }}</p>
    <component :is="demos[card.demo]" class="demo-box" @played="markCardDone(props.lessonId, props.cardIndex)" />
  </div>
</template>
<style scoped>
.inst { color: #666; }
.demo-box { margin-top: 12px; }
</style>
