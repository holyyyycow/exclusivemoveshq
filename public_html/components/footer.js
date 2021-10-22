

class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
  
  connectedCallback() {
    this.innerHTML = `
    <div class="row footer">
    <div class="col-lg">
        <hr>
        <p>
            DISCLAIMER: The Exclusive Moves HQ Decentralized Autonomous Community (EMHQ-DAC) is not responsible for any gains made during engagement with any content hereto-within. EMHQ-DAC does not take any responsibility for individuals striving for greatness. EMHQ-DAC makes no claims for financial or otherwise gain and does not promise any return on investment. EMHQ-DAC is a unique operating entity with no financial stake in any participants glow, any and all participants will bask in aforementioned illumination subject to all codes of Exclusivity and Safe Harbor Protocol (as explained on EMHQ-DAC Whitepaper) 

        </p>
    </div>
</div>
    `;
    }
  }
  
  customElements.define('footer-component', Footer);