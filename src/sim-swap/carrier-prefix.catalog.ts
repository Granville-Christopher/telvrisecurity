export interface CarrierPrefixRule {
  readonly prefix: string;
  readonly carrier: string;
  readonly country: string;
}

/**
 * Longest-prefix-first mobile network catalog for mocked HLR-style resolution.
 * Prefixes are E.164 without the national trunk zero (e.g. Nigeria 0803 → +234803).
 */
export const CARRIER_PREFIX_RULES: readonly CarrierPrefixRule[] = [
  // Nigeria (+234)
  { prefix: '+234703', carrier: 'MTN Nigeria', country: 'NG' },
  { prefix: '+234704', carrier: 'MTN Nigeria', country: 'NG' },
  { prefix: '+234706', carrier: 'MTN Nigeria', country: 'NG' },
  { prefix: '+234803', carrier: 'MTN Nigeria', country: 'NG' },
  { prefix: '+234806', carrier: 'MTN Nigeria', country: 'NG' },
  { prefix: '+234810', carrier: 'MTN Nigeria', country: 'NG' },
  { prefix: '+234813', carrier: 'MTN Nigeria', country: 'NG' },
  { prefix: '+234814', carrier: 'MTN Nigeria', country: 'NG' },
  { prefix: '+234816', carrier: 'MTN Nigeria', country: 'NG' },
  { prefix: '+234903', carrier: 'MTN Nigeria', country: 'NG' },
  { prefix: '+234906', carrier: 'MTN Nigeria', country: 'NG' },
  { prefix: '+234913', carrier: 'MTN Nigeria', country: 'NG' },
  { prefix: '+234916', carrier: 'MTN Nigeria', country: 'NG' },
  { prefix: '+234701', carrier: 'Airtel Nigeria', country: 'NG' },
  { prefix: '+234708', carrier: 'Airtel Nigeria', country: 'NG' },
  { prefix: '+234802', carrier: 'Airtel Nigeria', country: 'NG' },
  { prefix: '+234808', carrier: 'Airtel Nigeria', country: 'NG' },
  { prefix: '+234812', carrier: 'Airtel Nigeria', country: 'NG' },
  { prefix: '+234901', carrier: 'Airtel Nigeria', country: 'NG' },
  { prefix: '+234902', carrier: 'Airtel Nigeria', country: 'NG' },
  { prefix: '+234907', carrier: 'Airtel Nigeria', country: 'NG' },
  { prefix: '+234912', carrier: 'Airtel Nigeria', country: 'NG' },
  { prefix: '+234705', carrier: 'Glo Nigeria', country: 'NG' },
  { prefix: '+234805', carrier: 'Glo Nigeria', country: 'NG' },
  { prefix: '+234807', carrier: 'Glo Nigeria', country: 'NG' },
  { prefix: '+234811', carrier: 'Glo Nigeria', country: 'NG' },
  { prefix: '+234815', carrier: 'Glo Nigeria', country: 'NG' },
  { prefix: '+234905', carrier: 'Glo Nigeria', country: 'NG' },
  { prefix: '+234809', carrier: '9mobile Nigeria', country: 'NG' },
  { prefix: '+234817', carrier: '9mobile Nigeria', country: 'NG' },
  { prefix: '+234818', carrier: '9mobile Nigeria', country: 'NG' },
  { prefix: '+234909', carrier: '9mobile Nigeria', country: 'NG' },

  // Kenya (+254)
  { prefix: '+25470', carrier: 'Safaricom', country: 'KE' },
  { prefix: '+25471', carrier: 'Safaricom', country: 'KE' },
  { prefix: '+25472', carrier: 'Safaricom', country: 'KE' },
  { prefix: '+25474', carrier: 'Safaricom', country: 'KE' },
  { prefix: '+254757', carrier: 'Safaricom', country: 'KE' },
  { prefix: '+254758', carrier: 'Safaricom', country: 'KE' },
  { prefix: '+254768', carrier: 'Safaricom', country: 'KE' },
  { prefix: '+254769', carrier: 'Safaricom', country: 'KE' },
  { prefix: '+25479', carrier: 'Airtel Kenya', country: 'KE' },
  { prefix: '+25473', carrier: 'Airtel Kenya', country: 'KE' },
  { prefix: '+25475', carrier: 'Airtel Kenya', country: 'KE' },
  { prefix: '+25478', carrier: 'Airtel Kenya', country: 'KE' },
  { prefix: '+25477', carrier: 'Telkom Kenya', country: 'KE' },

  // Egypt (+20)
  { prefix: '+2010', carrier: 'Vodafone Egypt', country: 'EG' },
  { prefix: '+2011', carrier: 'Etisalat Egypt', country: 'EG' },
  { prefix: '+2012', carrier: 'Orange Egypt', country: 'EG' },
  { prefix: '+2015', carrier: 'WE Egypt', country: 'EG' },

  // South Africa (+27)
  { prefix: '+2781', carrier: 'Telkom Mobile South Africa', country: 'ZA' },
  { prefix: '+2782', carrier: 'Vodacom South Africa', country: 'ZA' },
  { prefix: '+2783', carrier: 'MTN South Africa', country: 'ZA' },
  { prefix: '+2784', carrier: 'Cell C South Africa', country: 'ZA' },

  // Ghana (+233)
  { prefix: '+23324', carrier: 'MTN Ghana', country: 'GH' },
  { prefix: '+23354', carrier: 'MTN Ghana', country: 'GH' },
  { prefix: '+23355', carrier: 'MTN Ghana', country: 'GH' },
  { prefix: '+23359', carrier: 'MTN Ghana', country: 'GH' },
  { prefix: '+23326', carrier: 'AirtelTigo Ghana', country: 'GH' },
  { prefix: '+23327', carrier: 'AirtelTigo Ghana', country: 'GH' },
  { prefix: '+23356', carrier: 'AirtelTigo Ghana', country: 'GH' },
  { prefix: '+23357', carrier: 'AirtelTigo Ghana', country: 'GH' },
  { prefix: '+23320', carrier: 'Vodafone Ghana', country: 'GH' },
  { prefix: '+23350', carrier: 'Vodafone Ghana', country: 'GH' },

  // Germany (+49)
  { prefix: '+49151', carrier: 'Deutsche Telekom', country: 'DE' },
  { prefix: '+49160', carrier: 'Deutsche Telekom', country: 'DE' },
  { prefix: '+49170', carrier: 'Deutsche Telekom', country: 'DE' },
  { prefix: '+49171', carrier: 'Deutsche Telekom', country: 'DE' },
  { prefix: '+49175', carrier: 'Deutsche Telekom', country: 'DE' },
  { prefix: '+49152', carrier: 'Vodafone Germany', country: 'DE' },
  { prefix: '+49162', carrier: 'Vodafone Germany', country: 'DE' },
  { prefix: '+49172', carrier: 'Vodafone Germany', country: 'DE' },
  { prefix: '+49173', carrier: 'Vodafone Germany', country: 'DE' },
  { prefix: '+49174', carrier: 'Vodafone Germany', country: 'DE' },
  { prefix: '+49159', carrier: 'O2 Germany', country: 'DE' },
  { prefix: '+49176', carrier: 'O2 Germany', country: 'DE' },
  { prefix: '+49179', carrier: 'O2 Germany', country: 'DE' },
  { prefix: '+49157', carrier: 'O2 Germany', country: 'DE' },

  // United Kingdom (+44)
  { prefix: '+4474', carrier: 'EE United Kingdom', country: 'GB' },
  { prefix: '+4475', carrier: 'Vodafone United Kingdom', country: 'GB' },
  { prefix: '+4477', carrier: 'O2 United Kingdom', country: 'GB' },
  { prefix: '+4478', carrier: 'Three United Kingdom', country: 'GB' },
  { prefix: '+4479', carrier: 'EE United Kingdom', country: 'GB' },

  // France (+33)
  { prefix: '+336', carrier: 'Orange France', country: 'FR' },
  { prefix: '+337', carrier: 'SFR France', country: 'FR' },

  // Spain (+34)
  { prefix: '+346', carrier: 'Movistar Spain', country: 'ES' },
  { prefix: '+347', carrier: 'Orange Spain', country: 'ES' },

  // Italy (+39)
  { prefix: '+3933', carrier: 'TIM Italy', country: 'IT' },
  { prefix: '+3934', carrier: 'Vodafone Italy', country: 'IT' },
  { prefix: '+3932', carrier: 'WINDTRE Italy', country: 'IT' },
  { prefix: '+3939', carrier: 'WINDTRE Italy', country: 'IT' },

  // Netherlands (+31)
  { prefix: '+316', carrier: 'KPN Netherlands', country: 'NL' },

  // India (+91)
  { prefix: '+9198', carrier: 'Airtel India', country: 'IN' },
  { prefix: '+9199', carrier: 'Airtel India', country: 'IN' },
  { prefix: '+9197', carrier: 'Jio India', country: 'IN' },
  { prefix: '+9170', carrier: 'Jio India', country: 'IN' },
  { prefix: '+9196', carrier: 'Vi India', country: 'IN' },
  { prefix: '+9194', carrier: 'BSNL India', country: 'IN' },

  // Brazil (+55)
  { prefix: '+5511', carrier: 'Vivo Brazil', country: 'BR' },
  { prefix: '+5521', carrier: 'Claro Brazil', country: 'BR' },
  { prefix: '+5531', carrier: 'TIM Brazil', country: 'BR' },

  // Mexico (+52)
  { prefix: '+5255', carrier: 'Telcel Mexico', country: 'MX' },
  { prefix: '+5233', carrier: 'Movistar Mexico', country: 'MX' },
  { prefix: '+5281', carrier: 'AT&T Mexico', country: 'MX' },

  // Australia (+61)
  { prefix: '+6140', carrier: 'Telstra Australia', country: 'AU' },
  { prefix: '+6141', carrier: 'Optus Australia', country: 'AU' },
  { prefix: '+6142', carrier: 'Vodafone Australia', country: 'AU' },
  { prefix: '+6143', carrier: 'Telstra Australia', country: 'AU' },
  { prefix: '+6145', carrier: 'Optus Australia', country: 'AU' },

  // Japan (+81)
  { prefix: '+8190', carrier: 'NTT Docomo', country: 'JP' },
  { prefix: '+8180', carrier: 'au by KDDI', country: 'JP' },
  { prefix: '+8170', carrier: 'SoftBank Japan', country: 'JP' },

  // UAE (+971)
  { prefix: '+97150', carrier: 'Etisalat UAE', country: 'AE' },
  { prefix: '+97152', carrier: 'du UAE', country: 'AE' },
  { prefix: '+97154', carrier: 'Etisalat UAE', country: 'AE' },
  { prefix: '+97155', carrier: 'du UAE', country: 'AE' },
  { prefix: '+97156', carrier: 'Etisalat UAE', country: 'AE' },
  { prefix: '+97158', carrier: 'du UAE', country: 'AE' },

  // Canada / USA share +1 — use common mobile-like NPANXX patterns where possible,
  // then fall back to deterministic US/CA wireless brands in the service.
  { prefix: '+1201', carrier: 'T-Mobile US', country: 'US' },
  { prefix: '+1212', carrier: 'Verizon Wireless', country: 'US' },
  { prefix: '+1310', carrier: 'AT&T Mobility', country: 'US' },
  { prefix: '+1415', carrier: 'T-Mobile US', country: 'US' },
  { prefix: '+1646', carrier: 'Verizon Wireless', country: 'US' },
  { prefix: '+1702', carrier: 'AT&T Mobility', country: 'US' },
  { prefix: '+1718', carrier: 'T-Mobile US', country: 'US' },
  { prefix: '+1305', carrier: 'Verizon Wireless', country: 'US' },
  { prefix: '+1404', carrier: 'AT&T Mobility', country: 'US' },
  { prefix: '+1617', carrier: 'T-Mobile US', country: 'US' },
  { prefix: '+1213', carrier: 'Verizon Wireless', country: 'US' },
  { prefix: '+1512', carrier: 'AT&T Mobility', country: 'US' },
  { prefix: '+1416', carrier: 'Rogers Canada', country: 'CA' },
  { prefix: '+1604', carrier: 'Telus Canada', country: 'CA' },
  { prefix: '+1514', carrier: 'Bell Canada', country: 'CA' },
];

export const COUNTRY_FALLBACK_CARRIERS: Readonly<Record<string, readonly string[]>> = {
  US: ['AT&T Mobility', 'T-Mobile US', 'Verizon Wireless', 'US Cellular'],
  CA: ['Rogers Canada', 'Bell Canada', 'Telus Canada', 'Freedom Mobile'],
  DE: ['Deutsche Telekom', 'Vodafone Germany', 'O2 Germany'],
  GB: ['EE United Kingdom', 'Vodafone United Kingdom', 'O2 United Kingdom', 'Three United Kingdom'],
  FR: ['Orange France', 'SFR France', 'Bouygues Telecom', 'Free Mobile'],
  ES: ['Movistar Spain', 'Vodafone Spain', 'Orange Spain', 'Yoigo Spain'],
  IT: ['TIM Italy', 'Vodafone Italy', 'WINDTRE Italy', 'Iliad Italy'],
  NL: ['KPN Netherlands', 'VodafoneZiggo', 'Odido Netherlands'],
  AU: ['Telstra Australia', 'Optus Australia', 'Vodafone Australia'],
  JP: ['NTT Docomo', 'au by KDDI', 'SoftBank Japan', 'Rakuten Mobile'],
  IN: ['Airtel India', 'Jio India', 'Vi India', 'BSNL India'],
  BR: ['Vivo Brazil', 'Claro Brazil', 'TIM Brazil', 'Oi Brazil'],
  MX: ['Telcel Mexico', 'Movistar Mexico', 'AT&T Mexico'],
  AE: ['Etisalat UAE', 'du UAE'],
  NG: ['MTN Nigeria', 'Airtel Nigeria', 'Glo Nigeria', '9mobile Nigeria'],
  KE: ['Safaricom', 'Airtel Kenya', 'Telkom Kenya'],
  EG: ['Vodafone Egypt', 'Orange Egypt', 'Etisalat Egypt', 'WE Egypt'],
  ZA: ['Vodacom South Africa', 'MTN South Africa', 'Cell C South Africa', 'Telkom Mobile South Africa'],
  GH: ['MTN Ghana', 'AirtelTigo Ghana', 'Vodafone Ghana'],
};

/** ISO country dialing codes sorted longest-first for country detection. */
export const COUNTRY_CALLING_CODES: readonly { code: string; country: string }[] = [
  { code: '+234', country: 'NG' },
  { code: '+254', country: 'KE' },
  { code: '+233', country: 'GH' },
  { code: '+971', country: 'AE' },
  { code: '+61', country: 'AU' },
  { code: '+81', country: 'JP' },
  { code: '+91', country: 'IN' },
  { code: '+55', country: 'BR' },
  { code: '+52', country: 'MX' },
  { code: '+49', country: 'DE' },
  { code: '+44', country: 'GB' },
  { code: '+39', country: 'IT' },
  { code: '+34', country: 'ES' },
  { code: '+33', country: 'FR' },
  { code: '+31', country: 'NL' },
  { code: '+27', country: 'ZA' },
  { code: '+20', country: 'EG' },
  { code: '+1', country: 'US' },
];
