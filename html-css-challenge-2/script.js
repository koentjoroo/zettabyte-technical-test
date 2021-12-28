const main = () => {
  const pricingPlanElements = document.querySelectorAll('div.pricing__plan')
  const pricingPlansButtonElements = document.querySelectorAll('button.pricing__plan-button')
  const pricingPlans = Array.from(pricingPlanElements)
  const pricingPlanButtons = Array.from(pricingPlansButtonElements)
  
  const onPricingPlanClick = item => {
    pricingPlans.map(el => el.classList.remove('selected'))
    item.classList.add('selected')
  }

  const onPricingPlanButtonClick = () => window.alert('Purchased Successfully')

  pricingPlans.map(item => item.addEventListener('click', () => onPricingPlanClick(item)))
  pricingPlanButtons.map(item => item.addEventListener('click', onPricingPlanButtonClick))
}

main()
