import { AnimationScope } from "framer-motion";

export async function sendButtonAnimation(
  scope: AnimationScope<any>,
  animate: any
) {
  await animate(
    scope.current,
    {
      rotate: [0, 360],
    },
    {
      duration: 2,
      delay: 2,
      ease: [0.17, 0.67, 0.16, 0.99],
    }
  );
  await animate(
    scope.current,
    {
      x: [0, "-40%"],
      y: [0, "40%"],
    },
    {
      duration: 0.5,
      ease: [0.17, 0.67, 0.16, 0.99],
    }
  );
  await animate(
    scope.current,
    {
      x: [0, "150%"],
      y: [0, "-150%"],
    },
    {
      duration: 0.5,
      ease: [0.17, 0.67, 0.16, 0.99],
    }
  );
  await animate(
    scope.current,
    {
      x: ["150%", "-150%"],
      y: ["-150%", "150%"],
    },
    {
      duration: 0,
      ease: [0.17, 0.67, 0.16, 0.99],
    }
  );
  await animate(
    scope.current,
    {
      x: ["-150%", 0],
      y: ["150%", 0],
    },
    {
      duration: 1.5,
      delay: 0.5,
      ease: [0.17, 0.67, 0.16, 0.99],
    }
  );

  sendButtonAnimation(scope, animate);
}
