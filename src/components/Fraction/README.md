# Ignoren esto uwu

    <div className={styles.container}>

      <button className={styles.collapsible}>{fractionNumber}</button>

      <div className={styles.content}>
        <p>{fractionText}</p>
        <Items
          items={items}
        />
      </div>

      <div class="accordion" id="accordionExample">

        <div class="card">

          <div class="card-header" id="headingThree">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                {fractionNumber}
              </button>
            </h2>
          </div>

          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
              {fractionText}
            </div>
          </div>

        </div>

      </div>

    </div>
