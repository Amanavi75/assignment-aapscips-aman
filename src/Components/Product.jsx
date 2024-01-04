import React from 'react'
import SingleCard from '../Utils/Singlecard'

function Product() {
  return (
    <>
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image="https://s3-alpha-sig.figma.com/img/64d7/11b8/5d18fa0e8186a1175456da9bf075b8cf?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L8FiZne4lL43qmlcl5KrYaPLtkoDhKcTnbxw65ZcLyyNI-LBNuL11vL67Z5GjFiXkbdsTutkfyWSbE-Gx5zW8mRNWs7HJAJZ50y9FjdQ7ur3~dFOkct4NrQY-T8Nb~TXvXzbmpUUBj6N2zM714wtHudEuEsSlHHTpoHAoljF5wWjUCWHrBKJqC4RqeP8qq-x7RyIrzIojQEUjHJzbze~noucCXv9mm~r1Amxt-7vdXrOPsj7ce4HH6VQiiKqlS0~-0F09UFTBfn8CRUKmw9sZFHxx7Lx6avixwv4l~uwf8YZpuqpyyc0IXinHgyeY8Bx4Vznu7FhS7IFoOUccaGcRA__"
              CardTitle="Product1"
              titleHref="/#"
              CardDescription="Sign in or Create an account to see pricing"
            />
            <SingleCard
              image="https://s3-alpha-sig.figma.com/img/060d/658c/b77bf58a139d6dfa3d0750b3abfea6b0?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C1zfTRzpguzSqJP8Bm7YlFRDTY1DcR30wXnPxnPtXXw7-pE4-LxmuOmQ5vxLZxAeKXxNaVd1xA8Ba-xpx93dSjTfxWa5vZGeODj-ONGaQsz1KPtgCdhuapHSotAfGlseGBWJD9WAnqrpr3u4ZVWcGJ8RxrU1EHASNXuzfhmCfGecUGLlXZetCSRIoFhwqCNn~d2prOIhEakJK~v2aB9lby5A-09WKkJiUgm9YbMyZPfecvWYLdjul2MmtfTbJKvHfCFOf7dIfihLm8AEHRupYrRfZM5XaNP56PovzayUiqC7bM-mRUvnihYFsr~VYQDdwcBm4TeLjGbeoZyKndfiXA__"
              CardTitle="Product2"
              CardDescription="Sign in or Create an account to see pricing"
             
            />
            <SingleCard
              image="https://s3-alpha-sig.figma.com/img/24de/d5b7/0bfe6fb1b00601aa092b3a2431565ab8?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FQ~~1nEl7SRi8HIl49DhF0C2qFnWmubSgqSW-MFr6htzWo79x3Or0hrTw9zME-bj2aZ9p~Q1L2XHb0GS4E-l2SrhmsnP9FV0s5fIViOJkum1HF9vXaEEgoA220OVty3Uujt2FJZU18Nom8ZT-25Xni5DVmf4wo5pnt13IN-jJk-aX4Wco80z7h-GJFAyKTf4XZsV0TyAue3u1vmB2K51MWtDoUBXU59p8LLOhGBZkFLpL2VGjEJ9e37h~1kq15Tqc6n1vbYS2Bb-fsrVtUfr6PkTS89XKzuyuBFC-1h0e9KNP87WwN1IYjnQa~xcXKbrrGJDHH7lzpzxqarXmPxUaw__"
              CardTitle="Product3"
              CardDescription="Sign in or Create an account to see pricing"
              
            />
            <SingleCard
              image="https://s3-alpha-sig.figma.com/img/ae5b/98e2/602bfd3b9e84759a3e7bebf51fc153c4?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XlwYtmFNvE0A6~8IRHVYTIBLNsm4y6M0bM38Z3ko8nONeioqIt2vEsIdAsFFPm9BYXFX1oTF9L4VejnAF3uJwETXkz9HguNEYjbEsC4ANTyBRGQ4ijU1tEz8am0oOgY5sRdxsMEEqkE8q9yzm22cCcoG-jRPDGHyl6ENjVLEK0ZHqfQmeReRSvOvh~0oT91~06MoN5b940TnrRSa7NxnNhsVO409MUUYEGkaOdVzHglm9GViyxUZvDSf0vkSI1M8FJMidHty2vPrJWF39KAy7bTfGM-DDPqh0IPZtQL4icTiyXFzZGzf8DggGu0kt6-C1~9XKkRVo8eKznjxpZ9Clg__"
              CardTitle="Product4"
              CardDescription="Sign in or Create an account to see pricing"
              
            />
            <SingleCard
              image="https://s3-alpha-sig.figma.com/img/1f05/2ec8/474c242763eb091c830e6d644b5c4146?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TSsFduSxgOpI-U22WBVi-yrihU~WrzCDZCpMWGNBNP31Zl13RACZUGiDF2-RZUzNUpsaIp8IbuGWmBdmnqCtJVSAQ2puwrBE99yV8xxIF2oi~vAhPWpT85azQkvdUleI2NMXYXWNATj02jNYsLEEqtLYMh-mQcdFgVc1d-3jykyiaRCR646W6q73~Ab06bRBASebZCXLtshy~SJC6KTXvG8vDMGAm9BH~d6wITqr7qdkKCSmWE82Md~TJlrpLSWMFFjFWLZ6ebO5EoB0yu-2a4h~BbVLL6TFwx1LbYz~0V3l3Wyl~gZSGg0twSQRmaTQaUSCDIkYVC0bGx7UdfpedQ__"
              CardTitle="Product5"
              titleHref="/#"
              CardDescription="Sign in or Create an account to see pricing"
              
            />
            <SingleCard
              image="https://s3-alpha-sig.figma.com/img/060d/658c/b77bf58a139d6dfa3d0750b3abfea6b0?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C1zfTRzpguzSqJP8Bm7YlFRDTY1DcR30wXnPxnPtXXw7-pE4-LxmuOmQ5vxLZxAeKXxNaVd1xA8Ba-xpx93dSjTfxWa5vZGeODj-ONGaQsz1KPtgCdhuapHSotAfGlseGBWJD9WAnqrpr3u4ZVWcGJ8RxrU1EHASNXuzfhmCfGecUGLlXZetCSRIoFhwqCNn~d2prOIhEakJK~v2aB9lby5A-09WKkJiUgm9YbMyZPfecvWYLdjul2MmtfTbJKvHfCFOf7dIfihLm8AEHRupYrRfZM5XaNP56PovzayUiqC7bM-mRUvnihYFsr~VYQDdwcBm4TeLjGbeoZyKndfiXA__"
              CardTitle="Product6"
              CardDescription="Sign in or Create an account to see pricing"
              
            />
            <SingleCard
              image="https://s3-alpha-sig.figma.com/img/53a3/19b5/f6a39f548b9894aeb71fa66c75d1d493?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fhKqpMn3vD1ymhj0OvmAFUv1WeEeD7AZgR5wWT9HAs8FZY3fh99M556ndYk5kbLrPSkE-HkUW7aPUd9IE5P2j0mvrjpvD~gJS8lGMh9ZJAY3uQ-UrQ2cmimAyuSCRlK9L1O-rIE8KCiaq6T0ZgA7SNuc8JDNkFeVg5v7uBS2EZwI-F-H4GSuW6GshOdRwdViRkOxCuBtib-RVwz9UTDniDgouMRaq1m65ZwXstt9ex~m8xANHl6UOXMMYiPQ0fizt-JhUuV1yH6QyLleVqdZuiADWXZ5CBMcF-FV2O3kzOvRSqStWv7geLPwH3xRu5oRLqanMHH1w-37S55i2tN7vA__"
              CardTitle="Product7"
              CardDescription="Sign in or Create an account to see pricing"
              
            /><SingleCard
            image="https://s3-alpha-sig.figma.com/img/4ca0/2eff/052a14d005f408ed5be74b2968bc6790?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RP7G~jAWb5G3qe4DaiDj7F8ipJq0~Nw21kcYExFZy7QR0l7LDnswrW~NUt5YCoEq6wO1x1u7QY0Jyk3rllu-wMIR60xOfR~tnNWKcKjN7Fo2fL06DlcWLXCurelf0RRSg2cGCPriQe3ryLIhQC7hkNLM8Sy2OvT--wARpycDaSyWyoB~QS7dDmSPDZJDQn69JgUwbCu~ZjKQG4rb4JBOmPFTmzJn~uHxQ9qcM-LW-iuid1e3KLCQrfS7KYJqkFc5ObcL8Z8DUvIFDX6833Mh37zuXD~fp~RlP6TnMPkXIyo5ef-tdJJyShy23FqivmzFQScuXevFOg00InhN~kLIRQ__"
            CardTitle="Product8"
            titleHref="/#"
          
            CardDescription="Sign in or Create an account to see pricing"
            
          />
          <SingleCard
            image="https://s3-alpha-sig.figma.com/img/2faf/4d5d/439325b3aa48e51703ab8fd15648b859?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G2V5AXhtkIkZRNnkklqMyUnvT8j5cEQ0rIt1uLHJYZTnyaxG-BYdXGrDgcvC27iXS8zmniAqZSW-JaLsi9EKFcXUE3eNyLyeqPu-~gQEjC~7bePLBqmE76MahewLAan8XfyaDWFxfyfJI7OwW9aiQjgi~HY4q73uBKmJ-VPg0Q7UuuFjQ~kS1lcWh3Fd2R7kc85efPAfHu9ttEWALjxqhU41F7wJYOj90KBmGfZAduVSQBC1JLY6DBsIGP3xaEACJV9O4nNkvb6gIcxRNEmLy7A2CHgJaBcBy~6KmXFYq9vNytn~uDMgDDAeM-EtauSBoK0QN~MEdJ0Gb7dslYNOMg__"
            CardTitle="Product9"
            CardDescription="Sign in or Create an account to see pricing"
            
          />
          <SingleCard
            image="https://s3-alpha-sig.figma.com/img/ecd8/5589/aa6e43d509e4554b4571e18368f33130?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QNzG3HaQ89VTg1hw1Lq~0B5-9Z4bTtASBzHvOEsJ6sF0VBIO0iyMOkpUGd42YlB9eDoauo4ljhwzyoqZzEf4xZrT0oAYK9jn-8xrGg069K0Jofr6AmRCg-vcUWdREBbA0gG75XaZtJuUGPDfLUre77E~wiPXtBq~isyacl3AMUJCIeUaaXpwyYDZeTjAsMdp3tTuF7ips3oVZWTkZ69aakRx2-7ivO7xCBuQY-ScwaCLNxcTtPAua2UNGLMbDB4rCvFqnY1GqUJwuLwqHlJMn1CwQrLYeU7xbvsSwm21w4udsq2J6XZ3z0uQ7i4JYHoHK4v6D56QLrfRyWZkYlX1jw__"
            CardTitle="Product10"
            CardDescription="Sign in or Create an account to see pricing"
            
          /><SingleCard
          image="https://s3-alpha-sig.figma.com/img/5b38/f9e3/8c76e38437010641e6314a98d51d33ed?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fyEWRscZFHCIsjLmRHSewfrVAirZ8bErJNJS0cVwrKxF91GqyeNKILonrrrfvQMp26il1RCaZdqUA0gevMBmSc6uXaYcSsh-AlZP5k4hYQJWACR5moOwOmzU2x5X9Otsn6xH2BZeslBRuaPeXt4uFY9piEL5qMrDqjdUWD4qt0Ru5XaoEFk1PLv84Mo9VGrWy1j2tjkgl-QDVF-pxbf-bxBvUxyp68Ea-GCriUn4u~vWtkfdXSXYkyHTzAmqhPp5AgtsIItOCnvUyQ9iNFse-vLORE3mvCS1k4QrCqmsPZMg7qsRZFAx8jXchLeFj7I20WIg3wcFZbJe~VtyVgFl3w__"
          CardTitle="Product11"
          titleHref="/#"
          
          CardDescription="Sign in or Create an account to see pricing"
          
        />
        <SingleCard
          image="https://s3-alpha-sig.figma.com/img/83e4/6d65/4cfac7091911ff82bc60e4986d2bc7d1?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BsKpAfWnFT4ZL8nyvdAXn9v91lO8DvQIsaGZ8zlN2eTjb2XZPzC-BZ50eA1xlCYjxWwCKXW9tjJjWLAhGC-5nitu0K8dyImPuXxt-2Xjl3YeQh26xQV6LUkuVf430Sj1cGvX7MSuU85P0ZAYA4LGNqxwhHOuvntmZBoCMp5OAXiPOsy~GKwSPthBQtbqRNgAw57gJcS5do7blMC8biSB-vHODsqTmfFVgUGHAkMa3gWsvbbWrHal4~uStW-ZJ-IN6FeUkDSeW0f9IAFWMLjpCwgJ3FQOK~wHF18BagUuchAXLyjdbgSPxrh2pnmO5lc31FFTjy7V~aKfgqh72wS3AA__"
          CardTitle="Product12"
          CardDescription="Sign in or Create an account to see pricing"
        
        />
        <SingleCard
          image="https://s3-alpha-sig.figma.com/img/24de/d5b7/0bfe6fb1b00601aa092b3a2431565ab8?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FQ~~1nEl7SRi8HIl49DhF0C2qFnWmubSgqSW-MFr6htzWo79x3Or0hrTw9zME-bj2aZ9p~Q1L2XHb0GS4E-l2SrhmsnP9FV0s5fIViOJkum1HF9vXaEEgoA220OVty3Uujt2FJZU18Nom8ZT-25Xni5DVmf4wo5pnt13IN-jJk-aX4Wco80z7h-GJFAyKTf4XZsV0TyAue3u1vmB2K51MWtDoUBXU59p8LLOhGBZkFLpL2VGjEJ9e37h~1kq15Tqc6n1vbYS2Bb-fsrVtUfr6PkTS89XKzuyuBFC-1h0e9KNP87WwN1IYjnQa~xcXKbrrGJDHH7lzpzxqarXmPxUaw__"
          CardTitle="Product13"
          CardDescription="Sign in or Create an account to see pricing"
          
        /><SingleCard
        image="https://s3-alpha-sig.figma.com/img/4093/978f/cd04ef3c9190a8af8239e95ba2b719a4?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e2Ifmwfe~DYAL1Bq1N9gKILyv-Y1MS9N2zXb5FewRHLyqGd-PrkFwrdZSCOOdHv7o5FnQsoaYr2atxn6biq4fxsN~iG2U5dsQWk1H0VUTCEL5~g5-CMIOWcmwctjwXxzcLQW8E80P8zUY9n3505oCdXL0-Sg6t78BSIY55JfPXE4f2Ck3eEnzuFOHhdY7fNagumpQXUmYdGKZ-AWJ-dx9JiKZfoFN2v6gccECNQDFe9ex2BXvZOXzy76OHCnbs5Z0~Vua0y7RM1ju3B3hlrjAHUJZQxSHVQYcsKqOpRioQczOMVyGyYv3urWYeCd7~BTyoa5ZMQ8xh4ZO~AlbPg-Rw__"
        CardTitle="Product14"
        titleHref="/#"
       
        CardDescription="Sign in or Create an account to see pricing"
        
      />
      <SingleCard
        image="https://s3-alpha-sig.figma.com/img/ae5b/98e2/602bfd3b9e84759a3e7bebf51fc153c4?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XlwYtmFNvE0A6~8IRHVYTIBLNsm4y6M0bM38Z3ko8nONeioqIt2vEsIdAsFFPm9BYXFX1oTF9L4VejnAF3uJwETXkz9HguNEYjbEsC4ANTyBRGQ4ijU1tEz8am0oOgY5sRdxsMEEqkE8q9yzm22cCcoG-jRPDGHyl6ENjVLEK0ZHqfQmeReRSvOvh~0oT91~06MoN5b940TnrRSa7NxnNhsVO409MUUYEGkaOdVzHglm9GViyxUZvDSf0vkSI1M8FJMidHty2vPrJWF39KAy7bTfGM-DDPqh0IPZtQL4icTiyXFzZGzf8DggGu0kt6-C1~9XKkRVo8eKznjxpZ9Clg__"
        CardTitle="Product15"
        CardDescription="Sign in or Create an account to see pricing"
        
      />
      <SingleCard
        image="https://s3-alpha-sig.figma.com/img/2faf/4d5d/439325b3aa48e51703ab8fd15648b859?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G2V5AXhtkIkZRNnkklqMyUnvT8j5cEQ0rIt1uLHJYZTnyaxG-BYdXGrDgcvC27iXS8zmniAqZSW-JaLsi9EKFcXUE3eNyLyeqPu-~gQEjC~7bePLBqmE76MahewLAan8XfyaDWFxfyfJI7OwW9aiQjgi~HY4q73uBKmJ-VPg0Q7UuuFjQ~kS1lcWh3Fd2R7kc85efPAfHu9ttEWALjxqhU41F7wJYOj90KBmGfZAduVSQBC1JLY6DBsIGP3xaEACJV9O4nNkvb6gIcxRNEmLy7A2CHgJaBcBy~6KmXFYq9vNytn~uDMgDDAeM-EtauSBoK0QN~MEdJ0Gb7dslYNOMg__"
        CardTitle="Product16"
        CardDescription="Sign in or Create an account to see pricing"
        
      /><SingleCard
      image="https://s3-alpha-sig.figma.com/img/1f05/2ec8/474c242763eb091c830e6d644b5c4146?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TSsFduSxgOpI-U22WBVi-yrihU~WrzCDZCpMWGNBNP31Zl13RACZUGiDF2-RZUzNUpsaIp8IbuGWmBdmnqCtJVSAQ2puwrBE99yV8xxIF2oi~vAhPWpT85azQkvdUleI2NMXYXWNATj02jNYsLEEqtLYMh-mQcdFgVc1d-3jykyiaRCR646W6q73~Ab06bRBASebZCXLtshy~SJC6KTXvG8vDMGAm9BH~d6wITqr7qdkKCSmWE82Md~TJlrpLSWMFFjFWLZ6ebO5EoB0yu-2a4h~BbVLL6TFwx1LbYz~0V3l3Wyl~gZSGg0twSQRmaTQaUSCDIkYVC0bGx7UdfpedQ__"
      CardTitle="Product17"
      titleHref="/#"
      
      CardDescription="Sign in or Create an account to see pricing"
      
    />
    <SingleCard
      image="https://s3-alpha-sig.figma.com/img/83e4/6d65/4cfac7091911ff82bc60e4986d2bc7d1?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BsKpAfWnFT4ZL8nyvdAXn9v91lO8DvQIsaGZ8zlN2eTjb2XZPzC-BZ50eA1xlCYjxWwCKXW9tjJjWLAhGC-5nitu0K8dyImPuXxt-2Xjl3YeQh26xQV6LUkuVf430Sj1cGvX7MSuU85P0ZAYA4LGNqxwhHOuvntmZBoCMp5OAXiPOsy~GKwSPthBQtbqRNgAw57gJcS5do7blMC8biSB-vHODsqTmfFVgUGHAkMa3gWsvbbWrHal4~uStW-ZJ-IN6FeUkDSeW0f9IAFWMLjpCwgJ3FQOK~wHF18BagUuchAXLyjdbgSPxrh2pnmO5lc31FFTjy7V~aKfgqh72wS3AA__"
      CardTitle="Product18"
      CardDescription="Sign in or Create an account to see pricing"
     
    />
          </div>
        </div>
      </section>
    </>
  )
}

export default Product


