import React from 'react';


const PrivacyPolicyModal = ({ onClose }) => {
  const modalStyle = {
    width: '100%', // Establece el ancho al 70%
    margin: '0 auto', // Centra el modal horizontalmente
  };

  return (
    <div className="privacidadModal" style={modalStyle}>
  <h2>POLÍTICA DE PRIVACIDAD</h2>
  <p>Última actualización: Enero 2023.</p>

  <h3>1. INFORMACIÓN AL USUARIO</h3>
  <p>
    ANICIA, S.L., como Responsable del Tratamiento, le informa que, según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril, (RGPD) y en la L.O. 3/2018, de 5 de diciembre, de protección de datos y garantía de los derechos digitales (LOPDGDD), trataremos su datos tal y como reflejamos en la presente Política de Privacidad.
  </p>
  <p>
    En esta Política de Privacidad describimos cómo recogemos sus datos personales y por qué los recogemos, qué hacemos con ellos, con quién los compartimos, cómo los protegemos y sus opciones en cuanto al tratamiento de sus datos personales.
  </p>
  <p>
    Esta Política se aplica al tratamiento de sus datos personales recogidos por la empresa para la prestación de sus servicios. Si acepta las medidas de esta Política, acepta que tratemos sus datos personales como se define en esta Política.
  </p>

  <h3>2. CONTACTO</h3>
  <p>
    Denominación social: ANICIA, S.L. <br />
    Nombre comercial: ANICIA <br />
    CIF: xxxxxxx <br />
    Domicilio: Bº Santa Ana 222a <br />
    e-mail: anicia@anicia.com
  </p>

  <h3>3. PRINCIPIOS CLAVE</h3>
  <p>
    Siempre hemos estado comprometidos con prestar nuestros servicios con el más alto grado de calidad, lo que incluye tratar sus datos con seguridad y transparencia. Nuestros principios son:
  </p>
  <ul>
    <li>Legalidad: Solo recopilaremos sus Datos personales para fines específicos, explícitos y legítimos.</li>
    <li>Minimización de datos: Limitamos la recogida de datos de carácter personal a lo que es estrictamente relevante y necesario para los fines para los que se han recopilado.</li>
    <li>Limitación de la Finalidad: Solo recogeremos sus datos personales para los fines declarados y solo según sus deseos.</li>
    <li>Precisión: Mantendremos sus datos personales exactos y actualizados.</li>
    <li>Seguridad de los Datos: Aplicamos las medidas técnicas y organizativas adecuadas y proporcionales a los riesgos para garantizar que sus datos no sufran daños.</li>

  </ul>

  <h3>4. RECOGIDA Y TRATAMIENTO DE SUS DATOS PERSONALES</h3>
  <p>
    Las tipos de datos que se pueden solicitar y tratar son:
  </p>
  <ul>
    <li>Datos de carácter identificativo.</li>
  </ul>
  <p>
    También recogemos de forma automática datos sobre su visita a nuestro sitio web según se describe en la política de cookies.
  </p>
  <p>
    Siempre que solicitemos sus Datos personales, le informaremos con claridad de qué datos personales recogemos y con qué fin. En general, recogemos y tratamos sus datos personales con el propósito de:
  </p>
  <ul>
    <li>Proporcionar información, servicios, productos, información relevante y novedades en el sector.</li>
    <li>Envío de comunicaciones.</li>
  </ul>

  <h3>5. LEGITIMIDAD</h3>
  <p>
    De acuerdo con la normativa de protección de datos aplicable, sus datos personales podrán tratarse siempre que:
  </p>
  <ul>
    <li>Nos ha dado su consentimiento a los efectos del tratamiento. Por supuesto podrá retirar su consentimiento en cualquier momento.</li>
    <li>Por requerimiento legal.</li>
    <li>Por existir un interés legítimo que no se vea menoscabado por sus derechos de privacidad, como por ejemplo el envío de información comercial bien por suscripción a nuestra newsletter o por su condición de cliente.</li>
    <li>Por ser necesaria para la prestación de alguno de nuestros servicios mediante relación contractual entre usted y nosotros.</li>
  </ul>

  <h3>6. COMUNICACIÓN DE DATOS PERSONALES</h3>
  <p>
    Los datos pueden ser comunicados a empresas relacionadas con TU EMPRESA, S.L. para la prestación de los diversos servicios en calidad de Encargados del Tratamiento. La empresa no realizará ninguna cesión, salvo por obligación legal.
  </p>

  <h3>7. SUS DERECHOS</h3>
  <p>
    En relación con la recogida y tratamiento de sus datos personales, puede ponerse en contacto con nosotros en cualquier momento para:
  </p>
  <ul>
    <li>Acceder a sus datos personales y a cualquier otra información indicada en el Artículo 15.1 del RGPD.</li>
    <li>Rectificar sus datos personales que sean inexactos o estén incompletos de acuerdo con el Artículo 16 del RGPD.</li>
    <li>Oponerse al tratamiento de sus datos personales de acuerdo con el artículo 21 del RGPD.</li>
  </ul>
  <p>
    Si ha otorgado su consentimiento para alguna finalidad concreta, tiene derecho a retirar el consentimiento otorgado en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.
  </p>
  <p>
    Puede ejercer estos derechos enviando comunicación, motivada y acreditada, a tuemail@tudominio.com
  </p>
  <p>
    También tiene derecho a presentar una reclamación ante la Autoridad de control competente (<a href="www.aepd.es">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.
  </p>

  <h3>8. INFORMACIÓN LEGAL</h3>
  <p>
    Los requisitos de esta Política complementan, y no reemplazan, cualquier otro requisito existente bajo la ley de protección de datos aplicable, que será la que prevalezca en cualquier caso.
  </p>
  <p>
    Esta Política está sujeta a revisiones periódicas y la empresa puede modificarla en cualquier momento. Cuando esto ocurra, le avisaremos de cualquier cambio y le pediremos que vuelva a leer la versión más reciente de nuestra Política y que confirme su aceptación.
  </p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};
export default PrivacyPolicyModal;