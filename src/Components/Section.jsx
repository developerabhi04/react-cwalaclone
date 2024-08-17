import { motion } from "framer-motion";

const headingOptions = {
    initial: { y: "-100%", opacity: 0, },
    whileInView: { y: 0, opacity: 1 }
}

const paragrapOptions = {
    ...headingOptions,
    transition: { delay: 0.6, }
}

const buttonOption = {
    initial: { y: "100%", opacity: 0, },
    whileInView: { y: 0, opacity: 1 },
    transition: { delay: 0.3, ease: "easeIn" }
}

const ImgOption = {
    initial: { scale: 0.1, opacity: 0, },
    whileInView: { scale: 1, opacity: 1 },
    transition: { delay: 0.3, }
}


const Section = (

    { h3, text, hasBtn = true, btnText, imgSrc, imgSize = "70%", backgroundColor, headingColor, textColor, btnBgColor, btnColor }
) => {

    return (
        <section className="section" style={{ backgroundColor }}>
            <div>
                <motion.h3 style={{ color: headingColor, }} data-cursorpointer="true" {...headingOptions}>
                    {h3}
                </motion.h3>

                <motion.p style={{ color: textColor, }} data-cursorpointer="true" {...paragrapOptions}>
                    {text}
                </motion.p>


                {hasBtn && (
                    <motion.button style={{ color: btnColor, backgroundColor: btnBgColor, }} data-cursorpointer="true" {...buttonOption}>
                        {btnText}
                    </motion.button>
                )}


                <motion.div {...ImgOption}>
                    <img src={imgSrc} alt="ImgSrc" style={{ width: imgSize, }} />
                </motion.div>

            </div>
        </section>
    )
}

export default Section
