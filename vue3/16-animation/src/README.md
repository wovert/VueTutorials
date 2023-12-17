# animation

- v-enter-from: 进入过度的开始状态。在元素插入之前生效，在元素被插入之后的下一帧移除。
- v-enter-active: 进入过度生效时的状态。在整个进入过度的阶段中应用，在元素被插入之前生效，在过度/动画完成之后移除。定义进入过度的过程时间，延迟和曲线函数。
- v-enter-to: 过度的结束状态。元素被插入之后下一帧生效（于此同时v-enter-from被移除），在过度/动画完成之后移除
- v-leave-from: 定义离开过度的开始状态。在离开过度被触发时立即生效，下一帧被移除。
- v-leave-active: 离开过度生效时的状态。整个离开过度的阶段中应用，在离开过度被触发时刻生效，在过度/动画完成之后移除。定义离开过度的过程时间，延迟和曲线函数。
- v-leave-to: 离开过度的结束状态。在离开过度被触发之后下一帧生效（与此同时v-leave-from被移除），在过度/动画完成之后移除。


- Enter(v-enter-active)
  - v-enter-from(opacity:0) -----------> v-enter-to(opacity: 1)
- Leave(v-leave-active)
  - v-leave-from(opacity:1) ------------> v-leave-to(opacity: 0)


没有name的transition，所有class以v-作为默认前缀