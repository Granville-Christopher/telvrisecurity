export interface DashboardSdkExamples {
  readonly apiKey: string;
  readonly npmInstall: string;
  readonly pipInstall: string;
  readonly goInstall: string;
  readonly composerInstall: string;
  readonly gemInstall: string;
  readonly mavenInstall: string;
  readonly dotnetInstall: string;
  readonly curlExample: string;
  readonly nodeExample: string;
  readonly fetchExample: string;
  readonly pythonExample: string;
  readonly goExample: string;
  readonly phpExample: string;
  readonly rubyExample: string;
  readonly javaExample: string;
  readonly csharpExample: string;
}

export function buildDashboardSdkExamples(): DashboardSdkExamples {
  const apiKey = 'rt_live_your_api_key';
  const apiBaseUrl = 'https://telvrisecurity.vercel.app';
  const npmInstall = 'npm install @telvri/security';
  const pipInstall = 'pip install telvri-security';
  const goInstall = 'go get github.com/telvri-security/telvri-go';
  const composerInstall = 'composer require telvri/security';
  const gemInstall = 'gem install telvri_security';
  const mavenInstall = 'com.telvri:security:1.0.0';
  const dotnetInstall = 'dotnet add package Telvri.Security';
  const curlExample = `curl -X POST ${apiBaseUrl}/v1/security/sim-check \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: ${apiKey}" \\
  -d '{"phoneNumber":"+2348031234569","maxAgeHours":24}'`;
  const nodeExample = `import { Configuration, SIMSwapIntelligenceApi } from '@telvri/security';

const config = new Configuration({
  basePath: '${apiBaseUrl}',
  apiKey: process.env.TELVRI_API_KEY,
});

const api = new SIMSwapIntelligenceApi(config);

const result = await api.simSwapControllerCheckSimSwap({
  checkSimSwapDto: {
    phoneNumber: '+2348031234569',
    maxAgeHours: 24,
  },
});

console.log(result);`;
  const fetchExample = `const response = await fetch('${apiBaseUrl}/v1/security/sim-check', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': process.env.TELVRI_API_KEY,
  },
  body: JSON.stringify({
    phoneNumber: '+2348031234569',
    maxAgeHours: 24,
  }),
});

const result = await response.json();
console.log(result);`;
  const pythonExample = `import os
import telvri_security
from telvri_security.models.check_sim_swap_dto import CheckSimSwapDto

config = telvri_security.Configuration(host="${apiBaseUrl}")
config.api_key["X-API-Key"] = os.environ["TELVRI_API_KEY"]

with telvri_security.ApiClient(config) as client:
    api = telvri_security.SIMSwapIntelligenceApi(client)

    result = api.sim_swap_controller_check_sim_swap(
        CheckSimSwapDto(phoneNumber="+2348031234569", maxAgeHours=24),
    )

    print(result)`;
  const goExample = `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

type SimSwapRequest struct {
	PhoneNumber string \`json:"phoneNumber"\`
	MaxAgeHours int    \`json:"maxAgeHours"\`
}

func main() {
	body, _ := json.Marshal(SimSwapRequest{
		PhoneNumber: "+2348031234569",
		MaxAgeHours: 24,
	})

	req, _ := http.NewRequest(
		http.MethodPost,
		"${apiBaseUrl}/v1/security/sim-check",
		bytes.NewReader(body),
	)

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-API-Key", os.Getenv("TELVRI_API_KEY"))

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		panic(err)
	}
	defer res.Body.Close()

	fmt.Println(res.Status)
}`;
  const phpExample = `<?php

$payload = json_encode([
    'phoneNumber' => '+2348031234569',
    'maxAgeHours' => 24,
]);

$ch = curl_init('${apiBaseUrl}/v1/security/sim-check');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'X-API-Key: ' . getenv('TELVRI_API_KEY'),
    ],
    CURLOPT_POSTFIELDS => $payload,
]);

echo curl_exec($ch);
curl_close($ch);`;
  const rubyExample = `require 'json'
require 'net/http'
require 'uri'

uri = URI('${apiBaseUrl}/v1/security/sim-check')
request = Net::HTTP::Post.new(uri)
request['Content-Type'] = 'application/json'
request['X-API-Key'] = ENV.fetch('TELVRI_API_KEY')
request.body = {
  phoneNumber: '+2348031234569',
  maxAgeHours: 24
}.to_json

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.body`;
  const javaExample = `HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("${apiBaseUrl}/v1/security/sim-check"))
    .header("Content-Type", "application/json")
    .header("X-API-Key", System.getenv("TELVRI_API_KEY"))
    .POST(HttpRequest.BodyPublishers.ofString("""
        {"phoneNumber":"+2348031234569","maxAgeHours":24}
        """))
    .build();

HttpResponse<String> response = HttpClient
    .newHttpClient()
    .send(request, HttpResponse.BodyHandlers.ofString());

System.out.println(response.body());`;
  const csharpExample = `using System.Net.Http.Headers;
using System.Text;

using HttpClient client = new();

using HttpRequestMessage request = new(HttpMethod.Post, "${apiBaseUrl}/v1/security/sim-check");
request.Headers.Add("X-API-Key", Environment.GetEnvironmentVariable("TELVRI_API_KEY"));
request.Content = new StringContent(
    "{\"phoneNumber\":\"+2348031234569\",\"maxAgeHours\":24}",
    Encoding.UTF8,
    "application/json"
);

HttpResponseMessage response = await client.SendAsync(request);
Console.WriteLine(await response.Content.ReadAsStringAsync());`;

  return {
    apiKey,
    npmInstall,
    pipInstall,
    goInstall,
    composerInstall,
    gemInstall,
    mavenInstall,
    dotnetInstall,
    curlExample,
    nodeExample,
    fetchExample,
    pythonExample,
    goExample,
    phpExample,
    rubyExample,
    javaExample,
    csharpExample,
  };
}
