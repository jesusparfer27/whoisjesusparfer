import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useFBX, useAnimations } from '@react-three/drei';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/animations/developer.glb');

  // Estado para verificar si las animaciones ya se cargaron
  const [loadedAnimations, setLoadedAnimations] = useState(false);

  // Cargar animaciones
  const idleAnimation = useFBX('/models/animations/idle.fbx');
  const saluteAnimation = useFBX('/models/animations/salute.fbx');
  const clappingAnimation = useFBX('/models/animations/clapping.fbx');
  const victoryAnimation = useFBX('/models/animations/victory.fbx');

  // Asignar nombres correctos a las animaciones
  useEffect(() => {
    if (idleAnimation && saluteAnimation && clappingAnimation && victoryAnimation) {
      idleAnimation.animations[0].name = 'idle';
      saluteAnimation.animations[0].name = 'salute';
      clappingAnimation.animations[0].name = 'clapping';
      victoryAnimation.animations[0].name = 'victory';
      setLoadedAnimations(true);
    }
  }, [idleAnimation, saluteAnimation, clappingAnimation, victoryAnimation]);

  // Cargar animaciones en el sistema de Drei
  const { actions } = useAnimations(
    [idleAnimation.animations[0], saluteAnimation.animations[0], clappingAnimation.animations[0], victoryAnimation.animations[0]],
    group
  );

  useEffect(() => {
    if (loadedAnimations && actions[animationName]) {
      Object.values(actions).forEach((action) => action.stop()); // Detener animaciones previas
      actions[animationName].reset().fadeIn(0.5).play();

      return () => {
        actions[animationName]?.fadeOut(0.5);
      };
    }
  }, [animationName, loadedAnimations]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
    </group>
  );
};

useGLTF.preload('/models/animations/developer.glb');

export default Developer;
