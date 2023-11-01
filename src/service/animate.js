export const fadeAnimateVariants = {
    initial: {
        opacity: 0,
    },
    animate: (val) => ({
        opacity: 1,
        transition: {
            delay: 0.25 * val
        }

    }),
}