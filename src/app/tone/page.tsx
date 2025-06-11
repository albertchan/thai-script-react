import Image from "next/image";
import styles from "./page.module.css";

export default async function Tone() {
  return (
    <main className="row">
      <div>
        <h2>Tone</h2>
        <div>
          <p>The Thai script gives full information on the tones. Tones are realised in the vowels, but indicated in the script by a combination of the class of the initial consonant (high, mid or low), vowel length (long or short), closing consonant (plosive or sonorant, called dead or live) and, if present, one of four tone marks.</p>
        </div>
        <div>
          <table className="table">
            <tbody>
              <tr>
                <th>Symbol</th>
                <th>Thai</th>
                <th>RTGS</th>
                <th>Vowel and Final</th>
                <th>Low</th>
                <th>Mid</th>
                <th>High</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>live (long vowel or vowel plus sonorant)</td>
                <td>middle</td>
                <td>middle</td>
                <td>rising</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>dead short (short vowel at end or plus plosive)</td>
                <td>high</td>
                <td>low</td>
                <td>low</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>dead long (long vowel plus plosive)</td>
                <td>falling</td>
                <td>low</td>
                <td>low</td>
              </tr>
              <tr>
                <td className="font-glyph">่</td>
                <td>ไม้เอก</td>
                <td>mai ek</td>
                <td>any</td>
                <td>falling</td>
                <td>low</td>
                <td>low</td>
              </tr>
              <tr>
                <td className="font-glyph">้</td>
                <td>ไม้โท</td>
                <td>mai tho</td>
                <td>any</td>
                <td>high</td>
                <td>falling</td>
                <td>falling</td>
              </tr>
              <tr>
                <td className="font-glyph">๊</td>
                <td>ไม้ตรี</td>
                <td>mai tri</td>
                <td>any</td>
                <td>-</td>
                <td>high</td>
                <td>-</td>
              </tr>
              <tr>
                <td className="font-glyph">๋</td>
                <td>ไม้จัตวา</td>
                <td>mai chattawa</td>
                <td>any</td>
                <td>-</td>
                <td>rising</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.diagram}>
          <figure>
            <Image src="/tones-chart-dark.svg" alt="Tone Chart" width={500} height={500} />
            <figcaption>Fig. 1: Thai language tone chart</figcaption>
          </figure>
        </div>
      </div>
    </main>
  );
}