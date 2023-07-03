const BackToTop = ({onClick}) () => {
    return (
      <button onClick={scrollToTop} className="back-to-top ">
          <img className="arrowimg" src={arrow} alt="submit" />
        </button>
  )
}