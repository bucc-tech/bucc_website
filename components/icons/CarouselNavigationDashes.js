export const InactiveDash = ({ className }) => {
  return (
    <svg width="40" height="4" viewBox="0 0 40 4" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="40" height="4" fill="#0E243A" fillOpacity="0.2" />
    </svg>

  )
}

export const ActiveDash = ({ className }) => {
  return (
    <svg width="60" height="6" viewBox="0 0 60 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="60" height="6" fill="#2F80ED" />
    </svg>

  )
}